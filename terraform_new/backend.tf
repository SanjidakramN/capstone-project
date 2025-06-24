terraform {
  backend "s3" {
    bucket         = "sanju-terraform-news3"
    key            = "eks-rds-fullstack/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "sanju-terraform-lock"
    encrypt        = true
  }
}
