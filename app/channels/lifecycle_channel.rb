class LifecycleChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'lifecycle_all'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def receive( data )
    match = data['type'].match(/\ALIFECYCLE_(.+)\Z/)
    method = match && match[1].downcase
    send( method, data['payload'] ) if method && respond_to?( method )
  end

  def hydrate( data )
  end

  def create( data )
  end

  def update( data )
  end

  def destroy( data )
  end
end
