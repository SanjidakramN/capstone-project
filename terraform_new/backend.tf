terraform {
  backend "s3" {
    bucket         = "sanju-terraform-state-eks"
    key            = "eks-rds-fullstack/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock-table"
    encrypt        = true
  }
}
