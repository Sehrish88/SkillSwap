class User < ApplicationRecord
  has_secure_password
  has_many :skills
  #accepts_nested_attributes_for :skills

  def skills_attributes=(hash)
    # custom attribute writer
    self.skills.build(field:  hash[:field], years_experience: hash[:years_experience])
    self.save 
  end
end 
