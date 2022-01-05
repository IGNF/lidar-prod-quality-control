#!/bin/bash
# export PYTORCHVERSION="1.8.0"
# export TORCHVISIONVERSION="0.9.0"

export PYTORCHVERSION="1.8.1"
export TORCHVISIONVERSION="0.9.1"
export CUDA="cu111"

set -e
conda install mamba -n base -c conda-forge

# some mamba specific issue occurs as in https://github.com/conda-incubator/conda-lock/issues/101
mamba env create -f bash/setup_environment/requirements.yml

# eval "$(conda shell.bash hook)"
conda activate validation_module

pip install torch==$PYTORCHVERSION torchvision==$TORCHVISIONVERSION -f https://download.pytorch.org/whl/torch_stable.html
mamba install -y pytorch-lightning==1.3 -c conda-forge  # TODO: check if version could be upgraded to latest.
pip install torch-sparse -f https://pytorch-geometric.com/whl/torch-$PYTORCHVERSION+$CUDA.html
conda install -y pytorch pyg -c pytorch -c pyg -c conda-forge  # TODO: check if pytorch here is needed
FORCE_CUDA=1 pip install torch-points-kernels --no-cache    # needs nvidia-cuda-toolkit
apt-get install postgis