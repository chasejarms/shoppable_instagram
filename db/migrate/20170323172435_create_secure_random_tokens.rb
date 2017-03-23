class CreateSecureRandomTokens < ActiveRecord::Migration[5.0]
  def change
    create_table "secure_random_tokens", force: :cascade do |t|
        t.string :secure_token, null: false
        t.timestamps
    end
    add_index :secure_random_tokens, :secure_token, unique: true
  end
end
