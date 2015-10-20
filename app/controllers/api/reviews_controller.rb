class Api::ReviewsController < ApplicationController
  before_action :require_sign_in!

  def new
  end

  def create
    @review = current_user.reviews.new(review_params)
    if @review.save
      flash[:errors] = ["Review created successfully"]
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all
    render json: @reviews
  end

  def edit
    @review = Review.includes(:user).find(params[:id])
  end

  def update
    @review = Review.includes(:user).find(params[:id])
    if @review.update(review_params)
      flash[:errors] = ["Review Edited successfully"]
      render json: @review
    else
      flash[:errors] = @review.errors.full_messages
    end
  end

  def show
    @review = Review.includes(:user).includes(:professor).find(params[:id])
    render :show
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    flash[:errors] = ["Review Deleted successfully"]
    render :root
  end

  private

  def review_params
    params.require(:review).permit(:anonymous, :user_id, :professor_id, :body, :ability, :easiness, :helpfulness)
  end
end
