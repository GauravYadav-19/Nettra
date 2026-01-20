from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

load_dotenv()  # 🔥 THIS LINE IS CRITICAL

class Settings(BaseSettings):
    JWT_SECRET: str
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7

settings = Settings()