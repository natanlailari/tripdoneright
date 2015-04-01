# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('world', '0002_worldborder_testnull'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='worldborder',
            name='testnull',
        ),
    ]
