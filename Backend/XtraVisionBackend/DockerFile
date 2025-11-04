# Use an official Java 17 image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy your project files
COPY . .

# Build the app using Maven Wrapper
RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Expose the port
EXPOSE 10000

# Run the app
CMD ["java", "-jar", "target/*.jar"]
