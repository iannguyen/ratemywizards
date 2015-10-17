class Api::ProfessorsController < ApplicationController
  def index
    @professors = Professor.includes(:reviews)
    render json: @professors
  end

  def show
    @professor = Professor.includes(:house).includes(reviews: :user).find(params[:id])
    render :show
  end
end
