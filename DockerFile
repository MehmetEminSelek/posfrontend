# Step 1: Choose a base image (in this case, Node)
FROM node:14-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the work directory
COPY package*.json ./

# Step 4: Install app dependencies
RUN npm install

# Step 5: Copy the rest of the code into the container (except items in .dockerignore)
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Expose the port that you'll run the app on
EXPOSE 3000

# Step 8: Define the runtime command
CMD ["npm", "start"]
