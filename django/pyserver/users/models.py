from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import GetFoxUserManager

class GetFoxUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    """ Roles """
    class Roles(models.IntegerChoices):
      GUEST = 0, _('Guest')
      ADMIN = 1, _('Admin')
      FOLLOWER = 2, _('Potential Follower')
      PUBLISHER = 3, _('Content Publisher')
      __empty__ = _('(Unknown)')
    
    role = models.SmallIntegerField(
        choices=Roles.choices,
        default=Roles.GUEST,
    )

    """ Instagram related fields """    
    ig_username = models.CharField(max_length=256, default='')
    ig_id = models.PositiveBigIntegerField(default=0)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = GetFoxUserManager()
    
    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin

    @property
    def is_content_publisher(self):
      return self.role is Roles.CONTENT_PUBLISHER

    @property
    def is_potential_follower(self):
      return self.role is Roles.POTENTIAL_FOLLOWER