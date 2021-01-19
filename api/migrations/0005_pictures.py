# Generated by Django 3.1.4 on 2021-01-16 18:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_iddistribution'),
    ]

    operations = [
        migrations.CreateModel(
            name='pictures',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('images', models.ImageField(blank=True, null=True, upload_to='images')),
                ('name1', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.name1')),
            ],
        ),
    ]