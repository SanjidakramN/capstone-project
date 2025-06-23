
terraform {
  backend "s3" {
    bucket         = "sanju-terraform-state-eks"         # ✅ Replace with your actual S3 bucket name
    key            = "eks-rds-fullstack/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock-table"              # ✅ Make sure this exists
    encrypt        = true
  }
}
