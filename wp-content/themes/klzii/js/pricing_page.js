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
  var container = $( ".price" );
  //container.append( "<p>"+JSON.stringify(data)+"</p>" );
  var plans = mapPlans(data.plans.plans);
  var activePlan = planWithCurrency(plans, supportedCurrencies[0]);
  console.log("_____", activePlan);

  renderTable(activePlan);
}


function addFreeTrialButton() {
  return "<p><a data-plan=\"free_trial\" class=\"btn btn-white noStyle lePetite full start-free-trial-popup\" style=\"box-shadow: none; border: 2px solid #96d393; color: #96d393;\" href=\"#\">START FREE TRIAL</a></p>";
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
                  addFreeTrialButton() +
                "</div>"+
              "<div></th>";
    }
  });
  tableHTML += "</tr>";
  return tableHTML;
}

function renderTable(activePlan) {
  var tableHTML = "<table>";
  tableHTML = renderTableHeaders(activePlan, tableHTML);
  tableHTML += "</table>";

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
