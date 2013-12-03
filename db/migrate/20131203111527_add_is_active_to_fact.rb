class AddIsActiveToFact < ActiveRecord::Migration
  def change
    add_column :facts, :is_active, :boolean, :null => false, :default => true
  end
end
