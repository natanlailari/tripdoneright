from django.conf.urls import patterns, include, url
from django.contrib import admin

from django.conf import settings

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'TripDoneRight.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'TripDoneRight.views.home', name='home'),
    url(r'^mushroomspot_list', 'TripDoneRight.views.mushroomspot', name='mushroomspot_list')
)

if settings.DEBUG:
    urlpatterns += patterns(
        'django.views.static',
        (r'^media/(?P<path>.*)',
        'serve',
        {'document_root': settings.MEDIA_ROOT}), )