from django.db import models

# Create your models here.

class User(models.Model):
    Firstname=models.CharField(max_length=10)
    Lastname=models.CharField(max_length=10)
    Email=models.CharField(max_length=50)
    
    def __str__(self):
        return self.Firstname

