#!/usr/bin/python

import os
import re
import json

__document_extension = ".doc"


class PmData:
    def __init__(self, asset_id, pm_type, pm_date):
        self.asset_id = asset_id
        self.pm_type = pm_type
        self.pm_date = pm_date

    def get_asset_id(self):
        return self.asset_id

    def get_pm_type(self):
        return self.pm_type

    def get_pm_date(self):
        return self.pm_date


class DataExtract:
    def __init__(self, path):
        self.pmdir = path
        print("Iniitalizing the extraction")

    def create_pm_data(self, pm_item):
        print("creating pm data with ", pm_item)
        pm_tokens = re.split("-", pm_item)
        # print(pm_tokens)
        try:
            pm_type = pm_tokens[0]
            asset_id = pm_tokens[1]
            pm_date = pm_tokens[2] + "-" + pm_tokens[3] + "-" + pm_tokens[4]
            pm_date = re.split("\.", pm_date)
            print(asset_id, pm_type, pm_date[0])
            pm_data_dic = {'asset_id': asset_id,
                           'pm_type': pm_type,
                           'pm_date': pm_date[0]}
            # pm_data = PmData(asset_id, pm_type, pm_date)
        except IndexError:
            print("********PM Item invalid file name pattern. Please check the item.**************")
            with open(self.pmdir + "/MissedPMData.txt", 'a') as f:
                f.write(pm_item + '\n')
        else:
            return pm_data_dic

        # if pm_data

    def read_directory(self, directory):
        print("Dir :", directory)
        pm_list = os.listdir(directory)
        pm_data_list = []
        for pm_item in pm_list:
            # print(pm_item)
            x = re.findall(".doc$", pm_item)
            # print(x)
            if x.__contains__(".doc"):
                pm_data = self.create_pm_data(pm_item)
                if pm_data is not None:
                    pm_data_list.append(pm_data)
        print(pm_data_list)
        print(len(pm_data_list))
        return pm_data_list


class DataParser:
    def __init__(self, path):
        self.pmdir = path
        print("Iniitalizing the parsing")

    def parse_pm_data(self, pm_data_list):
        # print(pm_data_list)
        pm_data_json = json.dumps(pm_data_list, indent=4)
        print(pm_data_json)
        with open(self.pmdir + "/PMData.json", 'w') as f:
            f.write(pm_data_json)
        return pm_data_json
