import requests
import json

def request_user_data(redirect_url, code):
    user_data = None

    access_data = request_access(code, redirect_url)
    if access_data['return_code'] == 200:
        user_data = request_user(
            access_data['user_id'], access_data['access_token'])
    else:
        user_data = {'status': 'error',
                     'error_message': access_data['error_message']}
    return user_data


def request_access(code, redirect_url):
    output = None

    url = 'https://api.instagram.com/oauth/access_token'

    endpointParams = dict()
    endpointParams['client_id'] = '314029640577318'
    endpointParams['client_secret'] = '2e1ff638a091a33d58572db211616e1b'
    endpointParams['grant_type'] = 'authorization_code'
    endpointParams['redirect_uri'] = redirect_url
    endpointParams['code'] = code

    data = requests.post(url, endpointParams)

    data_json = json.loads(data.content)

    try:
        output = {'return_code': 200,
                  'access_token': data_json['access_token'], 'user_id': data_json['user_id']}
    except BaseException as e:
        return_code = data_json['code']
        error_message = data_json['error_message']
        output = {'return_code': return_code, 'error_message': error_message}
    return output


def request_user(user_id, access_token):
    output = None

    user_url = 'https://graph.instagram.com/' + \
        str(user_id) + '?fields=id,username&access_token=' + access_token

    try:
        user_response = requests.get(user_url)
    except JSONDecodeError as jexp:
        output = {'status': 'error', 'data': jexp}
    except BaseException as e:
        output = {'status': 'error', 'data': e}

    if user_response.content is not None:
        output = json.loads(user_response.content)
        output['status'] = 'ok'
    return output
