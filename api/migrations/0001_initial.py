# Generated by Django 3.1.4 on 2020-12-29 12:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='login',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name1', models.CharField(max_length=200, unique=True)),
                ('password1', models.CharField(max_length=200)),
                ('email1', models.EmailField(max_length=200, unique=True)),
            ],
        ),
    ]