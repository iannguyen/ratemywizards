# Schema Information

## Reviews
association:
  belongs_to :user, :professor
review attributes between 1 and 5

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
anonymous       | boolean   | not null
user_id         | integer   | not null, indexed
professor_id    | integer   | not null, indexed
body            | text      | not null
ability         | integer   | not null, indexed
easiness        | integer   | not null, indexed
helpfulness     | integer   | not null, indexed



## Houses
association:
  has_many: professors

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique


## Professors
association:
  belongs_to :house
  has_many :reviews

column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
name                | string    | not null, indexed, unique
house_id            | integer   | not null, indexed, unique
image_file_name     | string    | not null


## Users
association:
  has_many :reviews

column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
username            | string    | not null, indexed, unique
password_digest     | string    | not null
session_token       | string    | not null, indexed, unique
student             | boolean   | not null, default, true
image_file_name     | string    | not null
