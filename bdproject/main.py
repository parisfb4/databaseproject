from flask import Flask, jsonify, request
import mysql.connector

app = Flask(__name__)

bd = mysql.connector.connect(host='localhost', user='parisfb', passwd='1234567890', database='contactos')
cursor = bd.cursor()


@app.route('/contactos/', methods=["GET", "POST"])
def contactos():
    if request.method == "GET":
        contacts = []
        query = "SELECT * FROM contact"
        cursor.execute(query)

        for contact in cursor.fetchall():
            d = {
                'id': contact[0],
                'name': contact[1],
                'number': contact[2],
                'email': contact[3],
                'facebook': contact[4],
                'instagram': contact[5],
                'twitter': contact[6],
                'img': contact[7],
                'id_user': contact[8]
            }
            contacts.append(d)
            # print(contact)
        print(contacts)
        return jsonify(contacts)
    else:
        data = request.get_json()
        print(data)
        query = "insert into contact(name, number, email, facebook, instagram, twitter, img, id_user) values (%s,%s, %s, %s, %s, %s, %s,%s)"
        cursor.execute(query, (data['name'], data['number'], data['email'], data['facebook'], data['instagram'], data['twitter'], data['img'], data['id_user']))
        bd.commit()

        if cursor.rowcount:
            return jsonify({'data': 'Ok'})
        else:
            return jsonify({'data': 'Error'})


@app.route('/contactoshw/', methods=["GET", "POST"])
def contactoshw():
    if request.method == "GET":
        contacts = []
        query = "SELECT * FROM contact"
        cursor.execute(query)

        for contact in cursor.fetchall():
            d = {
                'id': contact[0],
                'name': contact[1],
                'number': contact[2],
                'email': contact[3],
                'facebook': contact[4],
                'instagram': contact[5],
                'twitter': contact[6],
                'img': contact[7],
                'id_user': contact[8]
            }
            contacts.append(d)
            # print(contact)
        print(contacts)
        return jsonify(contacts)
    else:
        contacts = []
        data = request.get_json()
        query = "SELECT * from contact WHERE id_user = %s"
        cursor.execute(query, (
            data['idU'],))
        for contact in cursor.fetchall():
            d = {
                'id': contact[0],
                'name': contact[1],
                'number': contact[2],
                'email': contact[3],
                'facebook': contact[4],
                'instagram': contact[5],
                'twitter': contact[6],
                'img': contact[7],
                'id_user': contact[8]
            }
            contacts.append(d)

        print(contacts)
        return jsonify(contacts)



@app.route('/usuarios/', methods=["GET", "POST"])
def usuarios():
    ans = False
    if request.method == "GET":
        users = []
        query = "SELECT * FROM user"
        cursor.execute(query)

        for movie in cursor.fetchall():
            d = {
                'id': movie[0],
                'username': movie[1],
                'password': movie[2]
            }
            users.append(d)
            # print(movie)
        print(users)
        return jsonify(users)
    else:
        data = request.get_json()
        print(data)
        query = "INSERT INTO user(username, password) VALUES (%s, %s)"
        idquery = "SELECT id from user WHERE username = %s AND password = %s"
        cursor.execute(query, (
            data['username'], data['password'])
                       )
        bd.commit()

        if cursor.rowcount:
            ans = True
            cursor.execute(idquery, (data['username'], data['password']))
            return jsonify({'ans': ans, 'id': cursor.fetchall()[0]})
        else:
            return jsonify({'data': 'Error'})

@app.route('/contactosdel/', methods=["GET", "POST"])
def delete():
    ans = False
    if request.method == "POST":
        data = request.get_json()
        print(data)
        query = "DELETE FROM contact WHERE id = %s"
#        idquery = "SELECT id from user WHERE username = %s AND password = %s"
        cursor.execute(query, (data['id'],))
        bd.commit()

        if cursor.rowcount:
            ans = True
            #            cursor.execute(idquery, (data['username'], data['password']))
            return jsonify({'ans': ans})
        else:
            return jsonify({'data': 'Error'})
    else:
        users = []
        query = "SELECT * FROM user"
        cursor.execute(query)

        for movie in cursor.fetchall():
            d = {
                'id': movie[0],
                'username': movie[1],
                'password': movie[2]
            }
            users.append(d)
            # print(movie)
        print(users)
        return jsonify(users)

app.run(debug=True)
