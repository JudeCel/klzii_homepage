(function(){
var supportedCurrencies = ['AUD', 'USD', 'GBP', 'CAD', 'EUR', 'NZD'];
var planOrder = ["free", "senior", "core", "junior"];

window.loadPricingPlans = function() {
  $.ajax({
    url: "http://insider.focus.com:8080/api/public/subscriptionPlans",
    type: "GET",
    timeout: 30000,
    success: function(data) {
        displayPrices(data);
    }, error: function(jqXHR, textStatus, ex) {
    }
  });
}

function displayPrices(data) {
  var plans = mapPlans(data.plans.plans);
  var activePlan = planWithCurrency(plans, supportedCurrencies[0]);
  mapFeaturesToPlans(activePlan, data.plans.planDetails);
  renderTable(activePlan, data.plans.planDetails);
}

function mapFeaturesToPlans(plans, planDetails) {
  _.forEach(Object.keys(planDetails.additionalParams), function(planName) {
    _.forEach(plans, function(plan) {
      if (_.includes(plan.plan.id, planName)) {
        plan.features = planDetails.additionalParams[planName];
      }
    });
  });
}

function planBorderColor(plan) {
  if (_.includes(plan.id, "free")) return "#bdb795";
  else if (_.includes(plan.id, "senior")) return "#96d393";
  else if (_.includes(plan.id, "core")) return "#40b0df";
  else if (_.includes(plan.id, "junior")) return "#96d393";
}

function addFreeTrialButton(plan) {
  return "<div><a data-plan=\"free_trial\" class=\"btn btn-white noStyle lePetite full start-free-trial-popup\" style=\"box-shadow: none; border: 2px solid "+ planBorderColor(plan) + "; color: "+ planBorderColor(plan) + ";\" href=\"#\">START FREE TRIAL</a></div>";
}

function addGetStartedButton(plan) {
  return "<div class=\"noMargin\"><a data-plan=\"free_account\" class=\"btn btn-white noStyle lePetite full start-free-trial-popup\" style=\"border: 2px solid "+ planBorderColor(plan) + "; color: "+ planBorderColor(plan) + ";\" href=\"#\">GET STARTED</a></div>";
}

function headerClass(plan) {
  if (_.includes(plan.id, "free")) return "bgYellow";
  else if (_.includes(plan.id, "senior")) return "bgGreen";
  else if (_.includes(plan.id, "core")) return "bgBlue";
  else if (_.includes(plan.id, "junior")) return "bgGreen";
}

function headerPriceClass(plan) {
  if (_.includes(plan.id, "free")) return "bgYellow";
  else if (_.includes(plan.id, "senior")) return "bgMdGreen";
  else if (_.includes(plan.id, "core")) return "bgMdBlue";
  else if (_.includes(plan.id, "junior")) return "bgMdGreen";
}

function renderTableHeaders(activePlan, tableHTML) {
  //first table column will be empty for features
  tableHTML += "<tr><th></th>";
  _.forEach(activePlan, function(plan) {
    if (_.includes(plan.plan.id, "free")) {
      tableHTML += "<th></th>";
    } else {
      tableHTML += "<th class=\"" + headerClass(plan.plan)+ "\"><div>" +
                "<div class=\"text\">" +
                  "<h4>" + plan.plan.name + "</h4>" +
                "</div>"+
              "</th>";
    }
  });
  tableHTML += "</tr>";

  tableHTML += "<tr><th></th>";
  _.forEach(activePlan, function(plan) {
    if (_.includes(plan.plan.id, "free")) {
      tableHTML += "<th></th>";
    } else {
      tableHTML += "<th class=\"" + headerClass(plan.plan)+ "\"><div class=\"text\">" +
                  addFreeTrialButton(plan.plan) +
              "<div></th>";
    }
  });
  tableHTML += "</tr>";
  return tableHTML;
}

function renderTablePrices(activePlan, tableHTML) {
  //first table column is features
  tableHTML += "<tr>" +
  "<th class=\"bgGray\"><div>" +
    "<div class=\"text\">" +
      "<h4>Features</h4>" +
    "</div>"+
  "</th>";
  _.forEach(activePlan, function(plan) {
    if (_.includes(plan.plan.id, "free")) {
      tableHTML += "<th class=\"" + headerClass(plan.plan)+ "\"><div class=\"text\">"+
      "<h4>" + plan.plan.name + "</h4></div>" +
      addGetStartedButton(plan.plan) +
      "</th>";
    } else {
      tableHTML += "<th class=\"subHeader " + headerPriceClass(plan.plan) + " \">" +
        "<div>" +
          "<p class=\"marB10\"><span>$<b>"+ plan.plan.price/100 +"</b></span><span class=\"bottom\"> / MONTH</span></p>" +
          "<p class=\"noMargin fontS12\">Get 2 Months FREE on all annual plans</p>" +
        "</div>"+
      "</th>";
    }
  });
  tableHTML += "</tr>";
  return tableHTML;
}

function renderTableFeatures(activePlan, planDetails, tableHTML) {
  _.forEach(planDetails.features, function(feature) {
    tableHTML += "<tr>";
    tableHTML += "<td>" + feature.title + "</td>";
    _.forEach(activePlan, function(plan) {
      if (feature.type === "NumberLimit") {
        tableHTML += "<td>up to "+ plan.features[feature.key] +"/mth</td>";
      } else if (feature.type === "Boolean") {
        tableHTML += "<td>";
        if (plan.features[feature.key]) {
          tableHTML += "<span class=\"fa fa-check text-gray\"></span>";
        }
        tableHTML += "</td>";
      }
      else if (plan.features[feature.key] < 0) {
        tableHTML += "<td>unlimited</td>";
      } else {
        tableHTML += "<td>"+ plan.features[feature.key] +"</td>";
      }
    });
    tableHTML += "</tr>";
  });
  return tableHTML;
}


function renderTable(activePlan, planDetails) {
  var tableHTML = "<table>";
  tableHTML = renderTableHeaders(activePlan, tableHTML);
  tableHTML = renderTablePrices(activePlan, tableHTML);
  tableHTML = renderTableFeatures(activePlan, planDetails, tableHTML);
  tableHTML += "</table>";

  var container = $( ".price" );
  container.append( tableHTML );
  console.log("-----", tableHTML);
}



function planWithCurrency(plans, currency) {
  if (!plans || !currency) {
    return {};
  }

  var currencyPlanSelected = plans[currency];
  var planSelected;
  if (!currencyPlanSelected) {
    planSelected = [];
  } else {
    planSelected = currencyPlanSelected.month || [];
  }

  var orderedPlans = _.map(planOrder, function(p) {
    return _.find(planSelected, function(subPlan) {
      return _.includes(subPlan.plan.id, p);
    });
  });
  return orderedPlans;
}

function mapPlans(plans) {
  plans = _.filter(plans, function(item) {
    return _.find(supportedCurrencies, function(currency_code) {
      var supported = currency_code === item.plan.currency_code;
      return supported;
    })
  });

  plans = _.groupBy(plans, function(item) {
    return item.plan.currency_code;
  });

  supportedCurrencies.forEach(function(currency) {
    plans[currency] = _.groupBy(plans[currency], function(item) {
      return item.plan.period_unit;
    });
  });
  return plans;
}
})();
