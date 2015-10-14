class Api::ProfessorsController < ApplicationController
  def index
    @professors = Professor.all
    render json: @professors
  end

  def show
    @professor = Professor.find(params[:id])
    render json: @professor
  end
end
