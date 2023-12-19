import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','protwo.settings')
import django
django.setup()

from apptwo.models import User
from faker import Faker

fake=Faker()

def populate(n=5):
    for _ in range(n):
        fake_name=fake.name()
        first=fake_name.split()[0]
        last=fake_name.split()[1]
        fake_email = fake.email()


        data=User.objects.get_or_create(Firstname=first,Lastname=last,Email=fake_email)[0]
if __name__== '__main__':
    print("populating script")
    populate(10)
    print("populated")