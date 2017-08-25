App.lifecycle = App.cable.subscriptions.create "LifecycleChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel

  hydrate: ->
    @perform 'hydrate'

  create: ->
    @perform 'create'

  update: ->
    @perform 'update'

  destroy: ->
    @perform 'destroy'
