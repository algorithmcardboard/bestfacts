# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :fact do
    title "MyString"
    content "MyText"
    author nil
    user nil
  end
end
