from django.contrib import admin

# Register your models here.
from models import Category, Page, UserProfile

class CategoryAdmin(admin.ModelAdmin):
	prepopulated_fields = {'slug':('name',)}
admin.site.register(Category, CategoryAdmin)
admin.site.register(Page)
admin.site.register(UserProfile)
#BADUMDUM