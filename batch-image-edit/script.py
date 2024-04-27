from PIL import Image, ImageDraw, ImageFont
import json
import textwrap

positions = [(50, 50), (50, 100), (50, 150)]
colors = [(255, 0, 0), (0, 255, 0), (0, 0, 255)]  # for multiple colors

with open('projects.json') as f:
    name_tags = json.load(f)

for i, name_tag in enumerate(name_tags):
    img = Image.open('input_image.png')
    draw = ImageDraw.Draw(img)

    font = ImageFont.truetype('./fonts/PPGatwick-Bold.otf', size=80)

    # Wrap text within a specified width
    wrapped_text = textwrap.fill(name_tag["name"], width=24)

    draw.text((100, 400), wrapped_text, fill=(255, 255, 255), font=font, spacing=8)
    img.save(f'./generated/{name_tag["name"]}.png')
    print(f'Image {name_tag["name"]}.png saved!')
