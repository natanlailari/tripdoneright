from django.db import models
from django.contrib.auth.models import User
from django.db import models
from oauth2client.django_orm import CredentialsField

class CredentialsModel(models.Model):
  id = models.ForeignKey(User, primary_key=True)
  credential = CredentialsField()
# Create your models here.
