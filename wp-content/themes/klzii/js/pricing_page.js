var supportedCurrencies = ['AUD', 'USD', 'GBP', 'CAD', 'EUR', 'NZD'];

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
}

function planWithCurrency(plans, currency) {
  if (!plans || !currency) {
    return {};
  } else {
    return plans[currency];
  }
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
    plans[currency] = _.groupBy(plans[currency], (item) => item.plan.period_unit); // group by period
  });
  return plans;
}
