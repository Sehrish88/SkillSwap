class PagesController < ApplicationController

    def home 
        binding.pry 
        render json: {status: 200}
    end 

end 