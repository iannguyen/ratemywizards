class Api::ProfessorsController < ApplicationController
  def show
    @professor = Professor.find(params[:id])
    render json: @professor
  end
end
