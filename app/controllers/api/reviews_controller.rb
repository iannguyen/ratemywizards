class Api::ReviewsController < ApplicationController
  before_action :require_sign_in!

  def new
    @review = current_user.reviews.new(review_params)
  end

  def create
    @review = current_user.reviews.new(review_params)
    if @review.save
      flash[:errors] = ["Review created successfully"]
      render json: @review
    else
      flash[:errors] = @review.errors.full_messages
      render json: :unprocessable_entity, status: 422
    end
  end

  def index
    @reviews = Review.all
    render json: @reviews
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.includes(:professor).includes(:user).find(params[:id])
    @user = User.includes(reviews: :professor).find(current_user.id)
    if @review.update(review_params)
      flash[:errors] = ["Review Edited successfully"]
      render template: 'api/users/show'
    else
      flash[:errors] = @review.errors.full_messages
      render json: :unprocessable_entity, status: 422
    end
  end

  def show
    @review = Review.includes(:user).includes(:professor).find(params[:id])
    render :show
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    flash[:errors] = ["Review Deleted successfully"]
    @user = User.includes(:reviews).find(current_user.id)
    # model and db aren't always synched
    render template: 'api/users/show'
  end

  private

  def review_params
    params.require(:review).permit(:anonymous, :user_id, :professor_id, :body, :ability, :easiness, :helpfulness)
  end
end
