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

function addFreeTrialButton() {
  return "<p><a data-plan=\"free_trial\" class=\"btn btn-white noStyle lePetite full start-free-trial-popup\" style=\"box-shadow: none; border: 2px solid #96d393; color: #96d393;\" href=\"#\">START FREE TRIAL</a></p>";
}

function addGetStartedButton() {
  return "<p class=\"noMargin\"><a data-plan=\"free_account\" class=\"btn btn-white noStyle lePetite full start-free-trial-popup\" style=\"border: 2px solid #bdb795; color: #bdb795;\" href=\"#\">GET STARTED</a></p>";
}

function renderTableHeaders(activePlan, tableHTML) {
  //first table column will be empty for features
  tableHTML += "<tr><th></th>";
  _.forEach(activePlan, function(plan) {
    if (_.includes(plan.plan.id, "free")) {
      tableHTML += "<th></th>";
    } else {
      tableHTML += "<th><div>" +
                "<div>" +
                  "<h4>" + plan.plan.name + "</h4>" +
                "</div>"+
              "<div></th>";
    }
  });
  tableHTML += "</tr>";

  tableHTML += "<tr><th></th>";
  _.forEach(activePlan, function(plan) {
    if (_.includes(plan.plan.id, "free")) {
      tableHTML += "<th></th>";
    } else {
      tableHTML += "<th><div>" +
                  addFreeTrialButton() +
              "<div></th>";
    }
  });
  tableHTML += "</tr>";
  return tableHTML;
}

function renderTablePrices(activePlan, tableHTML) {
  //first table column is features
  tableHTML += "<tr><th>Features</th>";
  _.forEach(activePlan, function(plan) {
    if (_.includes(plan.plan.id, "free")) {
      tableHTML += "<th>"+
      "<h4>" + plan.plan.name + "</h4>" +
      addGetStartedButton() +
      "</th>";
    } else {
      tableHTML += "<th>" +
        "<div class=\"subHeader bgMdGreen\">" +
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
      else {
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
