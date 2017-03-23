class SecureRandomToken < ApplicationRecord
  validates :secure_token, presence: true, uniqueness: true

  def self.unique_token
    secure_token = SecureRandom.urlsafe_base64(16)

    while (self.exists?(secure_token: secure_token))
      secure_token = SecureRandom.urlsafe_base64(16)
    end

    secure_token
  end
end
