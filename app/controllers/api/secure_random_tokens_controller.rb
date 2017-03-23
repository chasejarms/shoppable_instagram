class Api::SecureRandomTokensController < ApplicationController
  def create
    unique_token = SecureRandomToken.unique_token

    @secure_random_token = SecureRandomToken.new(secure_token: unique_token)
    @secure_random_token.save

    render 'api/secure_random_tokens/show'
  end
end
