
@echo off

ng build --prod -o messaging --bh /messaging/ --env=prod && host-to-remote.bat


