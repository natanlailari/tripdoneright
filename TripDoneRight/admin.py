from django.contrib.gis import admin
from models import WorldBorder

# admin.site.register(WorldBorder, admin.GeoModelAdmin)
admin.site.register(WorldBorder, admin.OSMGeoAdmin)

from leaflet.admin import LeafletGeoAdmin
from django.contrib import admin

admin.site.register(MushroomSpot, LeafletGeoAdmin)