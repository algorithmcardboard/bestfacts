class CreateFacts < ActiveRecord::Migration
  def change
    create_table :facts do |t|
      t.string :title
      t.text :content, :null=>false
      t.references :user, index: true

      t.timestamps
    end
    add_foreign_key(:facts,:users)
  end
end
