let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://65l4x54bc3.execute-api.eu-central-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table = "restaurants-dev-giedriusbruzas"
  process.env.AWS_REGION        = "eu-central-1"
  process.env.order_events_stream = 'orders-dev-giedriusbruzas'
  process.env.restaurant_notification_topic = 'restaurants-dev-giedriusbruzas'
  process.env.TEST_ROOT = "https://65l4x54bc3.execute-api.eu-central-1.amazonaws.com/dev"

  initialized = true
}

module.exports = {
  init
}