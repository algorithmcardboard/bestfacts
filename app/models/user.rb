class User < ActiveRecord::Base
  has_many :facts
  
  has_secure_password

  validates :name, :email, presence: true
end
