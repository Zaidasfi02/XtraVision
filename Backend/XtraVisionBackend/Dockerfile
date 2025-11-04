# Use a stable Java 17 image (Eclipse Temurin)
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copy application files
COPY . .

# Make the wrapper executable and build the application
RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Expose port (matches your SERVER_PORT env)
EXPOSE 10000

# Run the built jar
CMD ["java", "-jar", "target/*.jar"]

