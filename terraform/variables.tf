variable "aws_region" {
  default = "us-east-2"
}

variable "vpc_cidr" { default = "10.0.0.0/16" }
variable "public_subnet_cidrs" { type = list(string) default = ["10.0.0.0/24", "10.0.1.0/24"] }
variable "private_subnet_cidrs" { type = list(string) default = ["10.0.2.0/24", "10.0.3.0/24"] }
variable "db_instance_type" { default = "db.t3.micro" }
variable "db_allocated_storage" { default = 20 }
variable "db_username" { default = "dbadmin" }
variable "db_password" { default = "MySecurePwd123!" }
variable "db_name" { default = "mydatabase" }
variable "eks_cluster_name" { default = "SanjuEKSCluster" }
variable "eks_desired_size" { default = 2 }
variable "eks_max_size" { default = 4 }
variable "eks_min_size" { default = 1 }
