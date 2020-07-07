#!/usr/bin/python

import sys
import time
from pmdatamanager import PmDataHandler


def execute():
    print(time.ctime())
    print("This small program will generate the PM completed data")
    pm_file_path = sys.argv[1]
    print ("PM file path : ", pm_file_path)
    pde = PmDataHandler.DataExtract(pm_file_path)
    pm_list = pde.read_directory(pm_file_path)
    pdp = PmDataHandler.DataParser(pm_file_path)
    pm_data_json = pdp.parse_pm_data(pm_list)
    print(time.ctime())



execute()
