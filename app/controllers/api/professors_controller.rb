class Api::ProfessorsController < ApplicationController
  def index
    @professors = Professor.includes(:house).includes(:reviews).all
    render :index
  end

  def new
    @professor = Professor.new(professor_params)
  end

  def create
    @professor = Professor.new(professor_params)
    if @professor.save
      flash[:errors] = ["Professor added successfully"]
      render json: @professor
    else
      flash[:errors] = @professor.errors.full_messages
      render json: :unprocessable_entity, status: 422
    end
  end

  def show
    @professor = Professor.includes(:house).includes(reviews: :user).find(params[:id])
    render :show
  end

  def edit
    @professor = Professor.find(params[:id])
  end

  def update
    @professor = Professor.includes(:house).includes(reviews: :user).find(params[:id])
    if @professor.update(professor_params)
      flash[:errors] = ["Wizard successfully Created!"]
      render :show
    else
      flash[:errors] = @professor.errors.full_messages
      render json: :unprocessable_entity, status: 422
    end
  end

  private

  def professor_params
    params.require(:professor).permit(:name, :house_id, :description, :image_url)
  end
end
