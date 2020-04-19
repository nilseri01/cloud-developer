# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

The project is split into three parts:
1. [The Simple Frontend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-frontend)
A basic Ionic client web application which consumes the RestAPI Backend. [Covered in the course]
2. [The RestAPI Backend](https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi), a Node-Express server which can be deployed to a cloud service. [Covered in the course]
3. [The Image Filtering Microservice](https://github.com/udacity/cloud-developer/tree/master/course-02/project/image-filter-starter-code), the final project for the course. It is a Node-Express application which runs a simple script to process images. [Your assignment]

## Endpoints
<b>repo url:</b> https://github.com/nilseri01/cloud-developer.git

<b>endpoint url example:</b> http://udagram-nils-dev-dev.us-east-2.elasticbeanstalk.com/

<b>example for valid picture url:</b> http://udagram-nils-dev-dev.us-east-2.elasticbeanstalk.com/filteredimage?image_url=https://www.roningallery.com/media/catalog/product/cache/1/image/6dcdb3bec3b7d3d8fa2d31ce95a0090e/g/r/greatwave_s.jpg

<b>example for invalid picture url:</b> http://udagram-nils-dev-dev.us-east-2.elasticbeanstalk.com/filteredimage?image_url=https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg
