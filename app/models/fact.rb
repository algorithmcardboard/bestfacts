class Fact < ActiveRecord::Base
  belongs_to :author
  belongs_to :user

  validates :content, :title, presence:true
  validates :user, :author, presence:true
end
