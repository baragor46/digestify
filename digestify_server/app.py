from flask import Flask, jsonify, request, json


app = Flask(__name__)

@app.route("/digestify", methods=['POST'])
def scrape_url():
    data = json.loads(request.data)
    url = str(data['url'])
    result =[
            {
                "author" : {
                    "title":"Lorem ipsum dolor sit amet", 
                    "author":"consectetur adipiscing elit", 
                    "summary":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                }
                
            }
    ]
    
    return jsonify(result)
 

if __name__ == '__main__':
    app.run()