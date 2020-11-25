from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import re

regex = re.compile(r'^[a-zA-Z]([a-zA-Z0-9.-]{,18}[a-zA-Z0-9])?$')


def is_username_valid(username):
    match = regex.search(username)
    if match:
        return True
    return False


@csrf_exempt
def user_login(request):
    if request.is_ajax and request.method == "POST":
        username = request.POST.get("username", None)
        result = is_username_valid(username)
        return JsonResponse({'result': result}, status=200)

    return JsonResponse(
        {"error": "Only AJAX with POST request allowed"},
        status=400,
    )
