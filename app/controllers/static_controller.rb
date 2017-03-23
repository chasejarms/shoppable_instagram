class StaticController < ApplicationController
  def root
    request_permanent_access_token if valid_shopify_parameters
  end

  private

  def valid_shopify_parameters
    return false unless all_params_present
    true
  end

  def all_params_present
    !!(params[:code] && params[:hmac] && params[:shop] && params[:state] && params[:timestamp])
  end

  def request_permanent_access_token
    puts "****************"
    puts "A Request Is Being Made"
    puts "****************"
  end
end
