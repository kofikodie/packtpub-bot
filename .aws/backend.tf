terraform {
  backend "s3" {
    bucket = "terraform-tfstate-01"
    key = "terraform/backend"
    region = "eu-central-1"
  }
}
